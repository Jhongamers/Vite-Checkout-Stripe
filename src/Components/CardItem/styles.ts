import styled from "styled-components";

export const Container = styled.div`

    width:300px;
    overflow: hidden;
    border: 1px solid #ccc;
    `

export const ImageContainer = styled.div`

    img{
        overflow: hidden;
        width: 300px;
    }
    `

export const CardContent = styled.div`
  
        margin: 1rem;
        margin-top: 0.3rem;

        button{
            display: block;
            margin:auto;
            border: none;
            background: #fff;
            font-size: 0.9rem;
            color:green;
            cursor: pointer;

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
