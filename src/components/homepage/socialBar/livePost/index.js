import React, { Component } from "react";
import styled from "styled-components";
import FBSmallIcon from "./../images/fblogo.svg";
import { mostRecentFBPost } from "./FBData.json";

const OuterBox = styled.div`
  box-shadow: -0.5rem 0.1rem 1.3rem 0 rgba(0, 0, 0, 0.5);
  margin: -4.5rem 0 2rem 0;
  background: #fff;
  padding: 1rem;
  transition: all 0.6s;

  &:hover {
    transform: scale(1.03);
  }
`;

const SocialWrapper = styled.div`
  height: 37rem;
  overflow: hidden;
  position: relative;
  color: #337ab7;

  &:hover {
    color: coral;
  }
`;

const FBImage = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  position: relative;
  background-image: url(${props => props.src});
`;

const ContentBlock = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: hsla(0, 0%, 100%, 0.85);
  line-height: 2.8rem;
  display: flex;
`;

const Caption = styled.div`
  font-size: 2rem;
  padding: 2rem;
  width: 85%;
`;

const SmallFBIcon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin-right: 1.8rem;
`;

const LoadingAnimation = styled.div`
  opacity: ${props => (props.activated ? 1 : 0)};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 80rem 10.4rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  transition: 0.6s all;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -80rem 0;
    }
    100% {
      background-position: 80rem 0;
    }
  }
`;
class LivePost extends Component {
  constructor() {
    super()
    this.state = {
      imageLoading: true,
      loaderAlive: true,
      timeout: null
    }
  }

  removeLoader() {
    this.setState({imageLoading: false})
    this.setState({timeout: setTimeout(() => {
      this.setState({loaderAlive: false})
    }, 1000)})
  }

  componentWillUnmount() {
    window.clearTimeout(this.state.timeout);
  }

  render() {
    return (
      <div>
        <a rel="noopener noreferrer" target="_blank" href={mostRecentFBPost.url}>
          <OuterBox>
            <SocialWrapper>
              { this.state.loaderAlive && <LoadingAnimation activated={this.state.imageLoading} /> }
              <FBImage src={mostRecentFBPost.imageURL} />
              <ContentBlock>
                <Caption>{mostRecentFBPost.message}</Caption>
                <SmallFBIcon>
                  <img
                    src={FBSmallIcon}
                    onLoad={() => this.removeLoader()}
                    alt="Facebook icon"
                    width="40"
                    height="40"
                  />
                </SmallFBIcon>
              </ContentBlock>
            </SocialWrapper>
          </OuterBox>
        </a>
      </div>
    );
  }
}

export default LivePost;
