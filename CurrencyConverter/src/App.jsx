import { InputBox } from './Components'
import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);

    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    }

    return (<>
        <div
            className="w-full min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/18889120/pexels-photo-18889120.jpeg')",
            }}
        >
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-8 w-full px-4">
                <h4 className="text-3xl md:text-3xl font-extrabold text-center tracking-tight text-white drop-shadow-lg">
                    💱 Currency Converter
                </h4>

                <div className="w-full max-w-md">
                    <div className="rounded-2xl p-6 backdrop-blur-md bg-white/30 border border-white/40 shadow-xl">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                convert();
                            }}
                            className="space-y-4"
                        >
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />

                            <div className="relative flex justify-center">
                                <button
                                    type="button"
                                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md transition duration-200"
                                    onClick={swap}
                                >
                                    Swap
                                </button>
                            </div>

                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-200"
                            >
                                Convert {from.toUpperCase()} → {to.toUpperCase()}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default App
