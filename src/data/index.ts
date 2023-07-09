import { Author, Book, Category } from "../store/AppContext"

const booksListData: Book[] = [
    {
        id: "52",
        cat_id: "8",
        aid: "26",
        book_title: "Mahatma vs gandhi ",
        book_description: "<p>Lorem Ipsum &nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n",
        book_cover_img: "86998_51z5IxdRwyL._SX322_BO1204203200_.jpg",
        book_bg_img: "53616_All-In-One-Videos_Banner.jpg",
        book_file_type: "server_url",
        total_rate: "3",
        rate_avg: "4",
        book_views: "53",
        author_id: "26",
        author_name: "Vallabhbhai Patel",
        cid: "8",
        category_name: "Noval"
    },
    {
        id: "51",
        cat_id: "8",
        aid: "26",
        book_title: "Sardar vallabhbahi patel",
        book_description: "<p>Lorem Ipsum &nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n",
        book_cover_img: "38884_41037wk1ApL._SX324_BO1,204,203,200_.jpg",
        book_bg_img: "4581_List-of_Top10_Banner.jpg",
        book_file_type: "server_url",
        total_rate: "3",
        rate_avg: "5",
        book_views: "72",
        author_id: "26",
        author_name: "Vallabhbhai Patel",
        cid: "8",
        category_name: "Noval"
    },
    {
        id: "49",
        cat_id: "8",
        aid: "26",
        book_title: "Sardar the sovereign saint",
        book_description: "<p>Lorem Ipsum &nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n",
        book_cover_img: "66201_41hPa5vF5uL._SX322_BO1,204,203,200_.jpg",
        book_bg_img: "99982_All-In-One-Videos_Banner.jpg",
        book_file_type: "server_url",
        total_rate: "2",
        rate_avg: "5",
        book_views: "36",
        author_id: "26",
        author_name: "Vallabhbhai Patel",
        cid: "8",
        category_name: "Noval"
    },
    {
        id: "48",
        cat_id: "11",
        aid: "29",
        book_title: "Danger girl",
        book_description: "<p>Lorem Ipsum &amp;nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&amp;#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n",
        book_cover_img: "12667_DG_Renegade_02-pr-page-001-e1445269933611.jpg",
        book_bg_img: "51020_List-of_Top10_Banner.jpg",
        book_file_type: "server_url",
        total_rate: "2",
        rate_avg: "3",
        book_views: "42",
        author_id: "29",
        author_name: "Ricardo Barreiro",
        cid: "11",
        category_name: "comic"
    },
    {
        id: "47",
        cat_id: "11",
        aid: "29",
        book_title: "Pokemon origami ",
        book_description: "<p>Lorem Ipsum &amp;nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&amp;#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n",
        book_cover_img: "3583_23397493.jpg",
        book_bg_img: "11453_kids_education_app_banner.jpg",
        book_file_type: "server_url",
        total_rate: "2",
        rate_avg: "3",
        book_views: "9",
        author_id: "29",
        author_name: "Ricardo Barreiro",
        cid: "11",
        category_name: "comic"
    },
    {
        id: "46",
        cat_id: "11",
        aid: "29",
        book_title: "Pokemon  alola region adventure guide ",
        book_description: "<p>Lorem Ipsum &nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n",
        book_cover_img: "95490_176689-ml-1644788.jpg",
        book_bg_img: "39926_All-In-One-Videos_Banner.jpg",
        book_file_type: "server_url",
        total_rate: "0",
        rate_avg: "0",
        book_views: "13",
        author_id: "29",
        author_name: "Ricardo Barreiro",
        cid: "11",
        category_name: "comic"
    },
    {
        id: "45",
        cat_id: "10",
        aid: "28",
        book_title: "Technology at the margins ",
        book_description: "<p>Lorem Ipsum &nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n",
        book_cover_img: "94291_technology.jpg",
        book_bg_img: "34680_List-of_Top10_Banner.jpg",
        book_file_type: "local",
        total_rate: "2",
        rate_avg: "4",
        book_views: "17",
        author_id: "28",
        author_name: "W Brian",
        cid: "10",
        category_name: "Technology"
    },
    {
        id: "44",
        cat_id: "10",
        aid: "28",
        book_title: "2030 Technology that will change the world ",
        book_description: "<p>Lorem Ipsum &nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n",
        book_cover_img: "31627_cover.jpg",
        book_bg_img: "62902_kids_education_app_banner.jpg",
        book_file_type: "local",
        total_rate: "1",
        rate_avg: "4",
        book_views: "2",
        author_id: "28",
        author_name: "W Brian",
        cid: "10",
        category_name: "Technology"
    },
    {
        id: "43",
        cat_id: "10",
        aid: "28",
        book_title: "The nature of technology",
        book_description: "<p>Lorem Ipsum &nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n",
        book_cover_img: "72789_6321234.jpg",
        book_bg_img: "19957_kids_education_app_banner.jpg",
        book_file_type: "local",
        total_rate: "0",
        rate_avg: "0",
        book_views: "5",
        author_id: "28",
        author_name: "W Brian",
        cid: "10",
        category_name: "Technology"
    },
    {
        id: "42",
        cat_id: "9",
        aid: "27",
        book_title: "The angry black south",
        book_description: "<p>Lorem Ipsum &nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n",
        book_cover_img: "41922_MacPhee_BlackPowerCovers_Nov2015-4.jpg",
        book_bg_img: "34762_Single_Hotel_Banner.jpg",
        book_file_type: "local",
        total_rate: "1",
        rate_avg: "2",
        book_views: "13",
        author_id: "27",
        author_name: "Jawaharlal Nehru",
        cid: "9",
        category_name: "History"
    }
]
const categoryListDat: Category[] = [
    {
        cid: "11",
        category_name: "comic",
        total_books: "3"
    },
    {
        cid: "9",
        category_name: "History",
        total_books: "3"
    },
    {
        cid: "3",
        category_name: "Inspirational",
        total_books: "3"
    },
    {
        cid: "6",
        category_name: "Kids",
        total_books: "3"
    },
    {
        cid: "1",
        category_name: "Life",
        total_books: "3"
    },
    {
        cid: "8",
        category_name: "Noval",
        total_books: "3"
    },
    {
        cid: "7",
        category_name: "Recipe",
        total_books: "3"
    },
    {
        cid: "2",
        category_name: "Success",
        total_books: "3"
    },
    {
        cid: "10",
        category_name: "Technology",
        total_books: "3"
    }
]
const authorListData: Author[] = [
    {
        author_id: "1",
        author_name: "A. P. J. Abdul Kalam",
        author_image: "95826_A_P_J_Abdul_Kalam.jpg"
    },
    {
        author_id: "25",
        author_name: "Elisabeth Hasselbeck",
        author_image: "88079_IQScookbook-cover.jpg"
    },
    {
        author_id: "27",
        author_name: "Jawaharlal Nehru",
        author_image: "70303_logo.jpg"
    },
    {
        author_id: "23",
        author_name: "Kids",
        author_image: "16626_800px_COLOURBOX8104156.jpg"
    },
    {
        author_id: "14",
        author_name: "Mahatma Gandhi",
        author_image: "70539_Mahatma-Gandhi.jpg"
    },
    {
        author_id: "29",
        author_name: "Ricardo Barreiro",
        author_image: "67738_AVT_Ricardo-Barreiro_793.jpeg"
    },
    {
        author_id: "24",
        author_name: "Sue Monk Kidd",
        author_image: "15750_images.jpg"
    },
    {
        author_id: "26",
        author_name: "Vallabhbhai Patel",
        author_image: "22319_Sardar-Patel-Image-for-blog-Sandeep-Manudhane-SM-sir.jpg"
    },
    {
        author_id: "28",
        author_name: "W Brian",
        author_image: "19929_arthur.jpeg"
    }
]

export { booksListData, categoryListDat, authorListData }