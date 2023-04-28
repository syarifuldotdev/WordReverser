"use client"

import { ChangeEvent, FC, FormEvent, useState } from 'react';

interface FormProps { }

const charMap: { [key: string]: string } =
{
    '0': '~', '1': '}', '2': '|', '3': '{', '4': '', '5': '_', '6': '^', '7': ']', '8': '[', '9': '@', 'a': '?', 'b': '>', 'c': '=', 'd': '<', 'e': ';', 'f': ':', 'g': '/', 'h': '.', 'i': '-', 'j': ',', 'k': '+', 'l': '*', 'm': ')', 'n': '(', 'o': "'", 'p': '&', 'q': '%', 'r': '$', 's': '#', 't': '"', 'u': '!', 'v': 'Z', 'w': 'Y', 'x': 'X', 'y': 'W', 'z': 'V', 'A': 'U', 'B': 'T', 'C': 'S', 'D': 'R', 'E': 'Q', 'F': 'P', 'G': 'O', 'H': 'N', 'I': 'M', 'J': 'L', 'K': 'K', 'L': 'J', 'M': 'I', 'N': 'H', 'O': 'G', 'P': 'F', 'Q': 'E', 'R': 'D', 'S': 'C', 'T': 'B', 'U': 'A', 'V': 'z', 'W': 'y', 'X': 'x', 'Y': 'w', 'Z': 'v', '!': 'u', '"': 't', '#': 's', '$': 'r', '%': 'q', '&': 'p', "'": 'o', '(': 'n', ')': 'm', '*': 'l', '+': 'k', ',': 'j', '-': 'i', '.': 'h', '/': 'g', ':': 'f', ';': 'e', '<': 'd', '=': 'c', '>': 'b', '?': 'a', '@': '9', '[': '8', ']': '7', '^': '6', '_': '5', '': '4', '{': '3', '|': '2', '}': '1', '~': '0',
};

const Form: FC<FormProps> = () => {
    const [showToast, setShowToast] = useState(false);
    const [password, setPassword] = useState('');

    const reverse = (e: FormEvent) => {
        e.preventDefault();
        let translatedWord = '';
        for (const char of password.trim()) {
            const translatedChar = charMap[char] || char;
            translatedWord += translatedChar;
        }
        console.log(translatedWord);
        navigator.clipboard.writeText(translatedWord);
        setShowToast(true);
        setPassword('');
        setTimeout(() => {
            setShowToast(false);
        }, 3000)


    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <div>
            <form onSubmit={reverse}>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input w-full max-w-xs mt-4"
                    value={password}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn mt-4">Reverse Password</button>
            </form>
            {showToast && (
                <div className="toast z-50">
                    <div className="alert alert-info">Copied To Clipboard</div>
                </div>
            )}
        </div>
    );
};

export default Form;