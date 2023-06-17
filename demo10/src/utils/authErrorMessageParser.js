export default function(errorCode) {
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'Geçersiz E-posta Adresi';

            case 'auth/email-already-exists':
                return 'Kullanıcı zaten mevcut';

                case 'auth/user-not-found':
                    return 'Kullanıcı bulunamadı';

                    case 'auth/weak-password':
                        return 'Şifreniz zayıfdır lo';

                       
            break;
    
        default:
            return errorCode;
    }
}