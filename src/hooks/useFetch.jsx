import React from 'react'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [isLoading, setLoading] = useState(true);
    const [listMeal, setListMeal] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error('Network response was not OK')
                }
                const data = await response.json();
                setListMeal(data.meals);
                console.log(data.meals);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url])

  return (
    {isLoading, listMeal, error}
  )
}

export default useFetch 