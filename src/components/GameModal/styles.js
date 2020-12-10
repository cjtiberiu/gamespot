import styled from 'styled-components';

export const SmallImage = styled.img`
    width: 150px;
    height: 75px;
    border: 1px solid grey;
    :hover {
        outline: 2px solid lightblue;
        cursor: pointer;
    }

    @media (max-width: 500px) {
        width: 100px;
        height: 50px;
    }
`;