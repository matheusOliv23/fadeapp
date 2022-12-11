import { gql } from '@apollo/client'

export const GET_MAIN = gql`
  query getMain {
    menus {
      name
      link
    }
    heroes {
      title
      subtitle
      textButton
      tryText
      image {
        url
      }
    }
    highlights {
      id
      title
      text
      image {
        url
      }
    }
    testimonialCards {
      id
      name
      message
      image {
        url
      }
    }
    abouts {
      text
      background {
        url
      }
    }
    planSections {
      plans {
        plan
        price
        promotional
        equivalentValue
        promotionalPrice
        buttonText
        image {
          url
        }
      }
      tryText
    }
    footers {
      socials {
        name
        link
        image {
          url
        }
      }
      companyName
      linkCompany
      title
    }
  }
`
