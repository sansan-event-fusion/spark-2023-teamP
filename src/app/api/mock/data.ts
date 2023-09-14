export const Data = [
  {
    key: "credential",
    response: {
      id: 1,
      name: "みちかず",
      email: "michikazu@example.com",
      birthday: new Date("2000/10/3"),
      introdction: "ハッカソン大好き！",
      accessToken: "test-access-token",
      authorization: "Bearer test-JWT",
    },
  },
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
        participantsCount: "2",
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
        participantsCount: "5",
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
        participantsCount: "7",
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
        id: 1,
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
        targets: ["楽しくワイワイ", "がち🔥"],
        area: "さいたま県",
      },
    },
  },
  {
    key: ["getRecruitmentDetail", 2],
    response: {
      user: {
        id: 2,
        name: "ゆせゆせ",
        profileImageUrl: "https://placehold.jp/250x150.png",
      },
      recruitment: {
        imageUrl: "https://placehold.jp/250x150.png",
        title: "Peach.Techみんな入って",
        peopleLimit: 20,
        participantsCount: 10,
        description: "Peach.Techみんなこい！",
        targets: ["初心者歓迎"],
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
    key: ["getQuestion", 1],
    response: [
      {
        user: {
          id: 1,
          name: "たかぴろ",
          profileImage: "https://placehold.jp/250x150.png",
        },
        body: "ハッカソンの出場経験がないのですが、参加可能なのでしょうか？",
        created_at: new Date("2023-9-10 11:00:00"),
      },
      {
        user: {
          id: 2,
          name: "みちかず",
          profileImage: "https://placehold.jp/250x150.png",
        },
        body: "はい！初心者大歓迎です！githubのアカウントだけ作っていただければ大丈夫です！",
        created_at: new Date("2023-9-10 11:01:00"),
      },
      {
        user: {
          id: 3,
          name: "ぴょんちー",
          profileImage: "https://placehold.jp/250x150.png",
        },
        body: "reactでの実装経験を積みたのですが、フロントエンドの技術は使う予定でしょうか？",
        created_at: new Date("2023-9-10 12:00:00"),
      },
      {
        user: {
          id: 2,
          name: "みちかず",
          profileImage: "https://placehold.jp/250x150.png",
        },
        body: "大丈夫ですよ！自分もreactかけるので一緒に勉強しながらやりましょう！",
        created_at: new Date("2023-9-10 13:01:00"),
      },
      {
        user: {
          id: 4,
          name: "いまむゆせ",
          profileImage: "https://placehold.jp/250x150.png",
        },
        body: "完全オンラインでしょうか？",
        created_at: new Date("2023-9-10 14:01:00"),
      },
      {
        user: {
          id: 2,
          name: "みちかず",
          profileImage: "https://placehold.jp/250x150.png",
        },
        body: "地元が近ければ対面での開発も考えております！",
        created_at: new Date("2023-9-10 15:01:00"),
      },
    ],
  },
];

export default Data;
