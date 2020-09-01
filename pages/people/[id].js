import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Date } from '../../components';
import { mixins } from '../../styles';
import { getActorById } from '../../lib';

export async function getServerSideProps({ params }) {
  const actorDetails = await getActorById(params.id);
  return { props: { actorDetails } };
}

const StyledContainer = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 150px 0;
  max-width: 1200px;
  ${mixins.flexCenter}
`;

const StyledContent = styled.div`
  ${mixins.flexBetween}
  align-items: flex-start;
  max-height: 50%;
  width: 80%;
`;

const StyledImage = styled.img`
  position: relative;
  max-height: 600px;
  object-fit: contain;
  border-radius: 10px;
`;

const StyledDetails = styled.div`
  width: 60%;
  max-width: 480px;
  a {
    ${mixins.link};
  }
`;

const StyledSubHeading = styled.h3`
  margin: 10px 0px 10px 0px;
`;

const Actor = ({ actorDetails }) => {
  const { name, birthday, biography } = actorDetails;
  const department = actorDetails.known_for_department;
  const profileLink =
    actorDetails.profile_path === null || undefined
      ? '/travolta.png'
      : `http://image.tmdb.org/t/p/w500/${actorDetails.profile_path}`;

  return (
    <StyledContainer>
      <Head>
        <title>{name}</title>
      </Head>

      <StyledContent>
        <StyledDetails>
          <Heading value={name} />
          <StyledSubHeading>
            {`Birthday: `}
            <Date dateString={birthday} context="description" />
          </StyledSubHeading>
          <StyledSubHeading>{`Department: ${department}`}</StyledSubHeading>
          <StyledSubHeading>Biography:</StyledSubHeading>
          <p>{biography}</p>
        </StyledDetails>
        <StyledImage src={profileLink} />
      </StyledContent>
    </StyledContainer>
  );
};

Actor.propTypes = {
  actorDetails: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Actor;
