// Definir uma tipagem para as propriedades do meu tweet
type TweetProps ={
    text: string;
}
export function Tweet(props:TweetProps){
    return(
       <div>
           <p>{props.text}</p>
       </div>
    )
}