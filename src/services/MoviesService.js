//optenir la liste des films recents
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWEwNGEyZjJkMjZhN2RmMzM0MWNmYWY3MzA3OTBjYyIsInN1YiI6IjY2MzUwNGU5YTFjNTlkMDEyY2U3NWZhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lBlz1xsE9lVr4YrsJK88nCKhOXZJ7NBGwh59Am35SJ8'
    }
  };

  let nameQuery = '';
  let pagenumber = 1;
  
  
  export async function getMovie_NowPlaying(){
    
    const response =  await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page='+pagenumber, options)

    return await response.json();
  }

  export async function getMovie_Search(nameQuery,pageNumber)
  {
    const response =  await fetch('https://api.themoviedb.org/3/search/movie?query='+nameQuery+'&include_adult=false&language=en-US&page='+pagenumber, options)

    console.log(response);
    return await response.json();
  }
