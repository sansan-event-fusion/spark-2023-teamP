export default [
    {
        key: ["getRecruitments"],
        response: [
            {
                id: 1,
                user_id: 1,
                name: "みちかず",
                imgUrl: "https://placehold.jp/250x150.png",
                title: "テスト投稿タイトル",
                peopleLimit: "3",
                createdAt: "2023-9-10",
                updatedAt: "2023-9-10",
            },
        ]
    },
    {
        key: ["getRoomChat", 1],
        response: [
            {
                user: {
                    id: 1,
                    name: "みちかず",
                    profileImage: "https://placehold.jp/250x150.png"
                },
                body: "応募いただきありがとうございます！！埼玉大学2年生のみちかずです。",
                created_at: new Date("2023-9-10 11:00:00"),
            },
            {
                user: {
                    id: 1,
                    name: "みちかず",
                    profileImage: "https://placehold.jp/250x150.png"
                },
                body: "今回のハッカソンで担当したい分野はどこですか？",
                created_at: new Date("2023-9-10 11:01:00"),
            },
            {
                user: {
                    id: 2,
                    name: "たかひろ",
                    profileImage: "https://placehold.jp/250x150.png"
                },
                body: "デザインとかやってみたいです。",
                created_at: new Date("2023-9-10 12:00:00"),
            },
        ]
    }    
];