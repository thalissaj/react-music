

export default function getArtistsTracks(props){
  let artistTracks = [];
  const BASE_URL = "https://peaceful-badlands-98440.herokuapp.com"
  const options = {
    method: "get",
    credentials: 'include'
  };
  console.log(props);
    props.map((artist, index) => {
    fetch(`${BASE_URL}/artists/${artist.id}/tracks`, options)
        .then(res => res.json())
        .then(data => {
          if (data.length === 0) {
            return {title: "Não possui músicas"};
          } else {
             // console.log(data);
             artistTracks[index] = data;
          }
         });
  })
  return artistTracks;
}
