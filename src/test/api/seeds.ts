class File {
    path: string;

    constructor(path: string) {
        this.path = path;
    }

    static open(path: string) {
        return new File(path);
    }
}

type IdInfo = {
    id: number
};

type UserInfo = {
    email: string,
    password: string,
    name: string,
    birthday: string,
    introduction: string,
    profile_image: File
};

class User {
    id: number;
    email: string;
    password: string;
    name: string;
    birthday: string;
    introduction: string;
    profileImage: File;

    constructor({ id, email, password, name, birthday, introduction, profile_image }: UserInfo & IdInfo) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.birthday = birthday;
        this.introduction = introduction;
        this.profileImage = profile_image;
    }

    static create(infos: UserInfo[]) {
        return infos.map((info, index) => new User({id: index+1, ...info}));
    }
}

type RecruitmentInfo = {
    user_id: number,
    title: string,
    description: string,
    image: File,
    area: string,
    people_limit: string,
    participants_count: string
};

class Recruitment {
    id: number;
    userId: number;
    title: string;
    description: string;
    image: File;
    area: string;
    peopleLimit: string;
    participantsCount: string;

    constructor({ id, user_id, title, description, image, area, people_limit, participants_count }: RecruitmentInfo & IdInfo) {
        this.id = id;
        this.userId = user_id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.area = area;
        this.peopleLimit = people_limit;
        this.participantsCount = participants_count;
    }

    static create(infos: RecruitmentInfo[]) {
        return infos.map((info, index) => new Recruitment({id: index+1, ...info}));
    }
}

type RecrutimentTargetInfo = {
    recruitment_id: number,
    title: string
};

class RecruitmentTarget {
    id: number;
    recruitmentId: number;
    title: string;

    constructor({ id, recruitment_id, title }: RecrutimentTargetInfo & IdInfo) {
        this.id = id;
        this.recruitmentId = recruitment_id;
        this.title = title;
    }

    static create(infos: RecrutimentTargetInfo[]) {
        return infos.map((info, index) => new RecruitmentTarget({id: index+1, ...info}));
    }
}

export function findById<T extends IdInfo>(data: T[], id: number) {
    return data.find(rec => rec.id === id);
}

export function findBy<T extends {[key: string]: any}>(data: T[], key: string, value: any): T[] {
    return data.filter(rec => rec[key] == value);
}

export const users = User.create([
    {email: "taisei25864@gmail.com", password: "taisei012", name: "たいせい", birthday: "2003-01-17", introduction: "兵庫県住みです。お願いします。", profile_image:File.open("./app/assets/images/taisei.jpg")},
    {email: "kanatatsu64@gmail.com", password: "tatsuya012", name: "たつや", birthday: "2002-06-2", introduction: "学生です。お願いします。", profile_image:File.open("./app/assets/images/tatsuya.jpg")},
    {email: "greenwillow49@gmail.com", password: "yagi012", name: "やぎ", birthday: "2002-08-23", introduction: "エンジニアです。お願いします。", profile_image:File.open("./app/assets/images/yagi.jpg")},
    {email: "yusei530922@gmail.com", password: "yuse012", name: "ゆせ", birthday: "2002-09-4", introduction: "東京住みです。お願いします。", profile_image:File.open("./app/assets/images/yusei.jpg")},
]);

export const recruitments = Recruitment.create([
    {user_id: 1, title: "ハッカソンメンバー募集", description: "フロントエンドのメンバー募集中です", image:File.open("./app/assets/images/hack.jpg"), area: "大阪", people_limit: "5", participants_count: "3"},
    {user_id: 2, title: "運動したい人集まれ", description: "誰でも歓迎です", image:File.open("./app/assets/images/activity.jpg"), area: "東京", people_limit: "20", participants_count: "14"},
    {user_id: 3, title: "Rails勉強会", description: "初心者歓迎です", image:File.open("./app/assets/images/rails.png"), area: "愛知", people_limit: "15", participants_count: "10"},
    {user_id: 4, title: "英会話勉強会", description: "英会話勉強したい人募集してます", image:File.open("./app/assets/images/english.jpg"), area: "沖縄", people_limit: "8", participants_count: "5"},
    {user_id: 1, title: "セキュリティ勉強会", description: "レベル高め", image:File.open("./app/assets/images/study.jpg"), area: "北海道", people_limit: "5", participants_count: "5"},
]);

export const recruitment_targets = RecruitmentTarget.create([
    {recruitment_id: 1, title: "学生"},
    {recruitment_id: 1, title: "楽しくワイワイ"},
    {recruitment_id: 2, title: "誰でも歓迎"},
    {recruitment_id: 3, title: "社会人"},
    {recruitment_id: 3, title: "楽しくワイワイ"},
    {recruitment_id: 4, title: "社会人"},
    {recruitment_id: 4, title: "ハイレベル"},
]); 