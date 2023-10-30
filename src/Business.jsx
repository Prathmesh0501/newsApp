import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function News() {
  // const data = useLoaderData();
  // console.log(data.articles)

  const [newsData, setNewsData] = useState([])

  async function fetchNewsData() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=931d4e85611a44e0bfca17de484ee9f4')
      .then(response => response.json())
      // console.log(response)
      .then(data => {
        console.log(data)
        setNewsData(data)
      })
  }

  useEffect(() => {
    fetchNewsData()
  }, [])


  return (

    <div>
      <div className='container-sm mt-5'>
        <div className='row'>
          {Array.isArray(newsData.articles) ? newsData.articles.map(item => (
            <div className='col-md-3'>
              <div class="card my-2 shadow">
                <img src={item.urlToImage} alt="Image-not-availabe" className='card-img-top p-2 ' />
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
    </div>
  )

}

export default News


// export const newsLoader = async () => {
//     const response = await fetch ('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=931d4e85611a44e0bfca17de484ee9f4')
//     return response.json()
// }