import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: Gifs[] = [];

  private giphy_api_key: string = '7KHWWyQV38BU8t5umVPc8LaEx6dqa7Ud';
  private giphy_url: string ='https://api.giphy.com/v1/gifs/search';

  private _tagsHistory: string[] = [];
  get tagHistory() {
    return [...this._tagsHistory];
  }

  constructor( private http: HttpClient) {
    this.loadLocalStorage();
  }
  
  private organizeHistory( tag: string ): void{

    tag = tag.toLowerCase();
    
    if( this._tagsHistory.includes(tag) ){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    
    this._tagsHistory.unshift( tag )
    this._tagsHistory = this._tagsHistory.splice(0, 10);

    this.saveLocalStorage();
    
  }

  private saveLocalStorage(): void{
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage(): void{
    if( !localStorage.getItem('history') ) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if( this._tagsHistory.length === 0 ) return;
    this.searchTag( this._tagsHistory[0] )
  }

  searchTag( newTag: string ): void{
    if( newTag.length === 0 ) return;
    this.organizeHistory(newTag);
    
    const params = new HttpParams()
      .set('api_key', this.giphy_api_key)
      .set('limit', '10')
      .set('q', newTag);

    this.http.get<SearchResponse>(this.giphy_url, { params })
      .subscribe( response => {
        this.gifsList = response.data
      })
  }
  
}
