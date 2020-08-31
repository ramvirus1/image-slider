export interface ImageProps {
    detail : object
    onPress():void
}
  
export interface ImageItem {
    author : string
    author_url : string
    filename : string
    format : string
    height : number
    id : number
    post_url : string
    width : number
}

export interface Actions{
    type : string
    payload? : object
}