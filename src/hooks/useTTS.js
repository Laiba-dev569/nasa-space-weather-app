import { useState, useEffect, useCallback, useRef } from 'react';

export function useTTS() {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [voices, setVoices] = useState([]);
    const audioRef = useRef(null);

    // Load voices securely
    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            setVoices(availableVoices);
        };

        if (typeof window !== "undefined" && window.speechSynthesis) {
            loadVoices();
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }
    }, []);

    const speak = useCallback((text, langCode = 'en') => {
        if (!window.speechSynthesis) return;

        // Cancel any ongoing native speech
        window.speechSynthesis.cancel();

        // Cancel any ongoing fallback audio
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
            setIsSpeaking(false);
        }

        if (!text) return;

        // Map basic language codes to more specific ones for better voice matching
        const langMap = {
            en: 'en-US',
            ur: 'ur-PK',
            tr: 'tr-TR',
            es: 'es-ES',
            it: 'it-IT',
            hi: 'hi-IN',
            ja: 'ja-JP',
            pt: 'pt-BR',
            af: 'af-ZA',
            ar: 'ar-SA',
            fr: 'fr-FR'
        };

        const targetLang = langMap[langCode] || langCode;
        const shortLang = targetLang.split('-')[0];

        // Check if we have a native voice for this language
        let hasNativeVoice = false;
        let selectedVoice = null;

        if (voices.length > 0) {
            selectedVoice = voices.find(v => v.lang.startsWith(shortLang));
            if (selectedVoice) {
                hasNativeVoice = true;
            }
        }

        // If no native voice, use Google Translate cloud TTS fallback
        if (!hasNativeVoice && ['hi', 'ur', 'ja', 'tr', 'pt', 'ar', 'zh', 'ko', 'ru'].includes(shortLang)) {
            const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${shortLang}&client=tw-ob&q=${encodeURIComponent(text)}`;
            const audio = new Audio(url);
            audioRef.current = audio;

            setIsSpeaking(true);

            audio.onended = () => setIsSpeaking(false);
            audio.onerror = (e) => {
                console.error("Cloud TTS failed:", e);
                setIsSpeaking(false);
            };

            audio.play().catch(e => {
                console.error("Audio playback failed:", e);
                setIsSpeaking(false);
            });
            return;
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = targetLang;

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        // Slightly adjust pitch/rate for a more "comic/storyteller" feel
        utterance.pitch = 1.1;
        utterance.rate = 0.95;

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        window.speechSynthesis.speak(utterance);
    }, [voices]);

    const stop = useCallback(() => {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
        setIsSpeaking(false);
    }, []);

    return { speak, stop, isSpeaking };
}
