import styled from "styled-components";

export const Container = styled.div`
    width:250px;
    overflow: hidden;
    border: 1px solid #ccc;
    background: #fff;
    `

export const ImageContainer = styled.div`

    img{
        overflow: hidden;
        width: 300px;
        height:200px;
    }
    `

export const CardContent = styled.div`
        margin: 1rem;
        margin-top: 0.3rem;
       
        button{
            display: block;
            margin:auto;
            padding:1rem;
            border: none;
            font-weight: bold;
            background: #B2ECE1;
            font-size: 0.9rem;
            color:#000;
            cursor: pointer;
            border-radius: 1rem;
            &:hover{
                filter: brightness(0.9);
            }
        }
 `

export const CardTitle = styled.div`
        margin-bottom:0.5rem;
        cursor:pointer;          
    
    `
    
export const CardBody = styled.div`
           margin-top:0.3rem;
           h3{
        margin-top:0.3rem;
        font-family: Arial, Helvetica, sans-serif;
        
    }  
`
