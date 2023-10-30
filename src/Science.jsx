import React, { useEffect, useState } from 'react'

function Science() {

    const [data, setData] = useState([])

    async function fetchScienceData() {
        const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=931d4e85611a44e0bfca17de484ee9f4')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }

    useEffect(() => {
        fetchScienceData()
    }, [])



    return (
        <div className='container-sm mt-5'>
            <div className='row'>
                {Array.isArray(data.articles) ? data.articles.map(item => (
                    <div className='col-md-3'>
                        <div class="card my-2 shadow">
                            <img src={item.urlToImage} alt="Image-not-availabe" className='card-img-top p-2' />
                            <div className="card-body bg-gray-200">
                                <h5 className="card-title text-cyan-700">{item.title}</h5>
                                <h6 className="card-text mb-2 text-muted text-red-800">{item.author}</h6>
                                <p className="card-text text-purple-900">{item.description}</p>
                                <a href={item.url} className="btn bg-blue-950 text-white mt-2 hover:bg-blue-800">Read More</a>
                            </div>
                        </div>
                    </div>
                )) : ''}
            </div>
        </div>

    )
}

export default Science