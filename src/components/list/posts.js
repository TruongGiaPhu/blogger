import React from 'react'
import ItemCard from './itemCard';

export const Posts = ({ posts, loading }) => {
    if (loading) return <div>Loading...</div>


    return (
        <>
            {
                posts && posts.map(item => {
                    return (
                        <ItemCard
                            key={item.id}
                            name={item.name}
                            date={item.date}
                            img={item.img}
                            title={item.title}
                            path={`/bai-viet/${item.title}/${item.id}`}
                        />
                    )
                })
            }
        </>
    )
}
