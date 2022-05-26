import React from 'react';
import styled from 'styled-components';


function Movies() {
  return (
    
    <Container>
        <h4>Recommended For You</h4>
        <Content>
            <Wrap>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpudYCKKLzIQioBceKbKIE5XKwWtk1VHaSXn6yzsDgtfEfsSr9pspqEiZ33ip6Ways_Q&usqp=CAU' />
            </Wrap>

            <Wrap>
                <img src='https://w0.peakpx.com/wallpaper/493/108/HD-wallpaper-star-wars-star-wars-episode-vii-the-force-awakens-star-wars-the-last-jedi-star-wars-the-rise-of-skywalker.jpg' />
            </Wrap>

            <Wrap>
                <img src='https://wallpaperaccess.com/full/2440930.jpg' />
            </Wrap>

            <Wrap>
                <img src='https://wallpaperaccess.com/full/2440930.jpg' />
            </Wrap>

            <Wrap>
                <img src='https://wallpaperaccess.com/full/2440930.jpg' />
            </Wrap>

            <Wrap>
                <img src='https://wallpaperaccess.com/full/2440930.jpg' />
            </Wrap>

            <Wrap>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpudYCKKLzIQioBceKbKIE5XKwWtk1VHaSXn6yzsDgtfEfsSr9pspqEiZ33ip6Ways_Q&usqp=CAU' />
            </Wrap>


            <Wrap>
                <img src='https://w0.peakpx.com/wallpaper/493/108/HD-wallpaper-star-wars-star-wars-episode-vii-the-force-awakens-star-wars-the-last-jedi-star-wars-the-rise-of-skywalker.jpg' />
            </Wrap>
        </Content>
    </Container>

  )
}

export default Movies;

const Container = styled.div`
    padding:
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 75%) 0px 30px 45px -12px, rgb(0 0 0 / 65%) 0px 20px 15px -10px;
        transform: scale(1.03);
        border-color: rgba(249, 249, 249, 0.8);
        
    }
`