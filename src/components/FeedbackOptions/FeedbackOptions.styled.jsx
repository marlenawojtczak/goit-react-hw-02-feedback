import styled from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Option = styled.button`
  font-family: 'Caveat';
  font-size: 24px;
  font-weight: 200;
  width: 100px;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid white;
  z-index: 2;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);

  &:nth-child(1):after {
    background-color: #afffaf;
  }

  &:nth-child(2):after {
    background-color: #ffffb5;
  }

  &:nth-child(3):after {
    background-color: #ff9494;
  }

  &:after {
    content: '';
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 5px;
    left: 5px;
    border-radius: 5px;
    transition: 0.2s;
  }
  &:hover:after {
    top: 0px;
    left: 0px;
  }
`;
