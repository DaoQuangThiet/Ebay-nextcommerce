import { Container } from "@mui/material";
import SearchBox from "../components/search/search-box";
import client from "../libs/apollo/ApolloClient";
import { handleRedirect } from "../utils/slug";
import { gql } from "@apollo/client";
import MenuFragment from "../libs/queries/menus";
import { useState } from "react";


// export const HeaderFooter = `
//   header: getHeader {
//     favicon
//     siteLogoUrl
//     siteTagLine
//     siteTitle
//   }
//   headerMenus: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
//     edges {
//       node {
//         ...MenuFragment
//         childItems {
//           edges {
//             node {
//               ...MenuFragment
//             }
//           }
//         }
//       }
//     }
//   }
//   footerMenus: menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
//     edges {
//       node {
//         ...MenuFragment
//       }
//     }
//   }
//   footer: getFooter {
//     copyrightText
//     sidebarOne
//     sidebarTwo
//     socialLinks {
//       iconName
//       iconUrl
//     }
//   }
// `

// export const GET_MENUS = gql`
// query GET_MENUS {
//   ${HeaderFooter}
// }
//   ${MenuFragment}
// `

export default function Search({ data }) {

    const { header, footer, headerMenus, footerMenus, slug } = data || {};
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchForm = (event) => {
        event.preventDefault();
        setShowRe
        return null;
    }

    return (
        <Container>
            <SearchBox
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearchForm={handleSearchForm}
            />
        </Container>
    )
}


// export async function getStaticProps() {
//     const { data, errors } = await client.query({
//         query: GET_MENUS
//     })


//     const defaultProps = {
//         props: {
//             data: { ...data, slug: 'search' }
//         },
//         revalidate: 1
//     }

//     return handleRedirect(defaultProps, data, errors, headerMenus)
// }