import React, { useState, useEffect } from 'react'
import {favoriteTvShow } from '../../api/tvshow'
import { favoritesIndex } from '../../api/tvshow'
import { useParams } from 'react-router-dom'

export const FavoriteTvShow = ({ show, user }) => {
    const { id } = useParams()
    // const [favBtn, setFavBtn] = useState(false)
    const [allFavorites, setAllFavorites] = useState({})
    const [favorite, setFavorite] = useState(
        {
            title: show.name,
            image: show.image.medium,
            rating: show.rating,
            description: show.summary,
            apiId: show.id,
        }
    )

    useEffect(() => {
        favoritesIndex(user)
            .then(res=> {
                setAllFavorites(res.data.tvShow)
            })
    }, [])

    // Was trying to use this code as well as the favBtn state to change or remove favorite button when the user has favorited a show
    // This is now a future goal
    // let tvShowArr = Array.from(allFavorites)
    // let favorited = tvShowArr.some(tvshow => (tvshow.owner._id === user._id) && (tvshow.apiId == id))

    const handleClick = (e) => {
        favoriteTvShow (favorite, user)
    }

    return (
        <>
            <button className='favorite-btn' onClick={handleClick}>Favorite</button>
        </>
    )
}

export default FavoriteTvShow