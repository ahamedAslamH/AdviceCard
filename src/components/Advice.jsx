import { useState, useEffect } from "react"

function Advice() {
    const [advice, setAdvice] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    async function fetchAdvice() {
        setIsLoading(true)
        try {
            const response = await fetch('https://api.adviceslip.com/advice')
            const data = await response.json()
            setAdvice(data.slip.advice)
        } catch (error) {
            console.error("Error fetching advice:", error)
            setAdvice("Failed to load advice. Please try again.")
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchAdvice()
    }, [])

    return (
        <div className='container'>
            <h1 className="welcome-text">Daily Wisdom</h1>
            <div className="card">
                <p className="para">
                    {isLoading ? "Loading..." : advice}
                </p>
                <button 
                    onClick={fetchAdvice} 
                    className="button"
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : "Get New Advice"}
                </button>
            </div>
        </div>
    )
}

export default Advice 