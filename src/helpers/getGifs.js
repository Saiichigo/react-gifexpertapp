const api = 'pWL3dAEkarsQvk2UBGtJNLiynckN1b5V';
const urlBase = `https://api.giphy.com/v1/gifs/`

export const getGift = async (category) => {
  console.log(category)
  const resp = await fetch(`${urlBase}search?q=${encodeURI(category)}&limit=10&api_key=${api}`)
  const {data} = await resp.json();
//   console.log(data);

  const gifs = data.map(({images, id, url, title}) => {
      return {
          id,
          images: images.downsized_medium.url,
          url,
          title
        }
    })

    // console.log(gifs)
    return gifs
 }