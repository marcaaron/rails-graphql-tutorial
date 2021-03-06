import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
  mutation createUser($name:String!, $email:String!, $password:String!){
    createUser(
      name: $name,
      authProvider: {
        email: {
          email: $email,
          password: $password
        }
      }
    ){
      id
      email
      name
    }
  }
`;

export const DELETE_LINK = gql`
  mutation deleteLink($id:ID!){
    deleteLink(id:$id)
  }
`;



export const DELETE_VOTE = gql`
  mutation deleteVote($user_id:ID!, $link_id:ID!){
    deleteVote(user_id:$user_id, link_id:$link_id)
  }
`

export const SIGN_IN_USER = gql`
  mutation signinUser($email:String!, $password:String!){
    signinUser(
      email: {
        email: $email,
        password: $password
      }
    ){
      token
      user {
        id
        email
        name
      }
    }
  }
`;

export const UPDATE_CLIENT_INFO = gql`
  mutation updateClientInfo($name:String, $email:String, $password:String, $token:String, $id:ID){
    updateClientInfo(name: $name, email: $email, password: $password, token: $token, id:$id) @client
  }
`;

export const UPDATE_CLIENT_LINK = gql`
  mutation updateClientLink($url:String, $description:String){
    updateClientLink(url: $url, description: $description) @client
  }
`;

export const UPDATE_ERROR_MESSAGE = gql`
  mutation updateErrorMessage($errorMessage: String!){
    updateErrorMessage(errorMessage:$errorMessage) @client
  }
`

export const TOGGLE_AUTH = gql`
  mutation toggleAuthType($isNewUser: Boolean!, $isAuthBoxHidden: Boolean!){
    toggleAuthType(isNewUser: $isNewUser, isAuthBoxHidden: $isAuthBoxHidden) @client
  }
`;

export const TOGGLE_CREATE_LINK = gql`
  mutation toggleCreateLink($isCreateLinkHidden: Boolean!){
    toggleCreateLink(isCreateLinkHidden: $isCreateLinkHidden) @client
  }
`;

export const CREATE_LINK = gql`
  mutation createLink($url:String!, $description:String!, $user_id:ID!, $slug:String!){
    createLink(url:$url, description:$description, user_id:$user_id, slug: $slug){
      id
      url
      slug
      description
      postedBy {
        id
        name
      }
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($link_id:ID!, $user_id:ID!){
    createVote(link_id:$link_id, user_id:$user_id){
      link {
        description
      }
      user {
        name
      }
    }
  }
`;
