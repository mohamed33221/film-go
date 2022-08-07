import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public _HttpClient:HttpClient) { }

  getMovieTrend():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/discover/movie?api_key=62748cf0df6adb2714f05fe9c53a069b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
  }
  getMovieTrend2():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/discover/movie?api_key=62748cf0df6adb2714f05fe9c53a069b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate')
  }
  getTvTrend():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/discover/tv?api_key=62748cf0df6adb2714f05fe9c53a069b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
  }
  getTvTrend2():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/discover/tv?api_key=62748cf0df6adb2714f05fe9c53a069b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
  }
  getMovieDetails(id:any):Observable<any>
  {
      return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=62748cf0df6adb2714f05fe9c53a069b&language=en-US`)
  }
  moviesRecommend(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=62748cf0df6adb2714f05fe9c53a069b&language=en-US&page=1`)
  }
  getTvDetils(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=62748cf0df6adb2714f05fe9c53a069b&language=en-US`)
  }
  tvRecommend(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=62748cf0df6adb2714f05fe9c53a069b&language=en-US&page=1`)
  }
  getOfficalTrindMovie():Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=62748cf0df6adb2714f05fe9c53a069b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&pag=22&with_watch_monetization_types=flatrate`)
  }
  getOfficalTrindTv():Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=62748cf0df6adb2714f05fe9c53a069b`)
  }
  getUpComingMovie():Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=62748cf0df6adb2714f05fe9c53a069b&language=en-US&page=1`)
  }
  getTopRated():Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=62748cf0df6adb2714f05fe9c53a069b&language=en-US&page=1`)
  }

}
