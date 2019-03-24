import React from 'react';
import { useHiragana } from './hooks/useHiragana';
import { useAxios } from './hooks/useAxios';
import { scrambleKana } from './lib/learn';
import './worksheet.css'

export default function Worksheet() {

    const { hiragana } = useAxios('/get-hiragana');

    if (!hiragana) return null;

    const kana = Object.values(hiragana).map(char => char.kana);
    const scrambledKana = scrambleKana(kana);

    return (
        <div className = 'worksheet-container'>
            { scrambledKana && scrambledKana.map((k, idx) => (
                <div key = { idx } className = "kana-container">
                    <input name = "kana" />
                    <p>{ k }</p>
                </div>
            ))}
        </div>
    )
}
