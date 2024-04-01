import * as yup from "yup";

const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("E-Mail Geçerli Bir Formatta Olmalıdır.")
    .required("E-Mail Zorunlu Bir Alandır"),
  age: yup
    .number("Lütfen Sayı Giriniz")
    .integer("Lütfen Yaş İçin Tam Sayı Giriniz")
    .min(18, "Yaş 18'den Büyük Olmalıdır")
    .max(100, "Yaş 100'den Büyük Olamaz")
    .required("Yaş Zorunlu Bir Alandır."),
  password: yup
    .string()
    .min(5, "Şifre Minimum 5 Karakter Olmak Zorundadır")
    .matches(regex, "Lütfen Daha Güçlü Bİr Şifre Giriniz")
    .required("Şifre Alanı Zorunludur."),
  passwordconfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreniz Eşleşmiyor")
    .required("Şifre Onayı Zorunludur"),
});
