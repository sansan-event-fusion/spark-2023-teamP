export const Data = [
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
        targets: ["楽しくワイワイ", "がち🔥"],
        createdAt: "2023-9-10",
        updatedAt: "2023-9-10",
      },
      {
        id: 2,
        user_id: 2,
        name: "ゆせゆせ",
        imgUrl: "https://placehold.jp/250x150.png",
        title: "Peach.Techみんな入って",
        peopleLimit: "10",
        targets: [],
        createdAt: "2023-9-11",
        updatedAt: "2023-9-11",
      },
      {
        id: 3,
        user_id: 3,
        name: "たつや",
        imgUrl: "https://placehold.jp/250x150.png",
        title: "うちのサークル入って",
        peopleLimit: "15",
        targets: ["初心者大歓迎"],
        createdAt: "2023-9-12",
        updatedAt: "2023-9-12",
      },
    ],
  },
  {
    key: ["getRecruitmentDetail", 1],
    response: {
      user: {
        name: "みちかず",
        profileImageUrl: "https://placehold.jp/250x150.png",
      },
      recruitment: {
        imageUrl: "https://placehold.jp/250x150.png",
        title: "さいたまっこハッカソン一緒にでましょう",
        peopleLimit: 4,
        participantsCount: 3,
        description:
          "さいたま市で5/13に開催される「さいたまっこハッカソン」に一緒に参加してくれる人を募集します。私は主にRuby on Railsの経験があり、バックエンドの実装は任せてください！！",
        targets: [
          {
            title: "初心者歓迎",
          },
          {
            title: "楽しく",
          },
        ],
        area: "さいたま県",
      },
    },
  },
  {
    key: ["getRecruitmentDetail", 2],
    response: {
      user: {
        name: "ゆせゆせ",
        profileImageUrl: "https://placehold.jp/250x150.png",
      },
      recruitment: {
        imageUrl: "https://placehold.jp/250x150.png",
        title: "Peach.Techみんな入って",
        peopleLimit: 20,
        participantsCount: 10,
        description: "Peach.Techみんなこい！",
        targets: [
          {
            title: "初心者歓迎",
          },
          {
            title: "楽しく",
          },
        ],
        area: "成蹊大学",
      },
    },
  },
  {
    key: ["getRoomChat", 1],
    response: [
      {
        user: {
          id: 1,
          name: "みちかず",
          profileImage: "https://placehold.jp/250x150.png",
        },
        body: "応募いただきありがとうございます！！埼玉大学2年生のみちかずです。",
        created_at: new Date("2023-9-10 11:00:00"),
      },
      {
        user: {
          id: 1,
          name: "みちかず",
          profileImage: "https://placehold.jp/250x150.png",
        },
        body: "今回のハッカソンで担当したい分野はどこですか？",
        created_at: new Date("2023-9-10 11:01:00"),
      },
      {
        user: {
          id: 2,
          name: "たかひろ",
          profileImage: "https://placehold.jp/250x150.png",
        },
        body: "デザインとかやってみたいです。",
        created_at: new Date("2023-9-10 12:00:00"),
      },
    ],
  },
  {
    key: ["getRecruitmentDetail", 1],
    response: {
      user: {
        name: "みちかず",
        profileImageUrl: "https://placehold.jp/250x150.png",
      },
      recruitment: {
        imageUrl: "https://placehold.jp/250x150.png",
        title: "さいたまっこハッカソン一緒にでましょう",
        peopleLimit: 4,
        participantsCount: 3,
        description:
          "さいたま市で5/13に開催される「さいたまっこハッカソン」に一緒に参加してくれる人を募集します。私は主にRuby on Railsの経験があり、バックエンドの実装は任せてください！！",
        targets: [
          {
            title: "初心者歓迎",
          },
          {
            title: "楽しく",
          },
        ],
        area: "さいたま県",
      },
    },
  },
];

export default Data;
