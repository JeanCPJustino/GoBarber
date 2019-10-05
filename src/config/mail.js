export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};

/** SERVIÇOS DE ENVIO DE EMAIL PARA PRODUÇÃO:
 *
 * Amazon SES (BARATO PODE UTILIZÁ-LO)
 * Mailgun
 * Sparkpost
 * Mandril (Mailchimp)
 *
 */

/** SERVIÇOS DE ENVIO DE EMAIL PARA DESENVOLVIMENTO:
 *
 * Mailtrap (DEV)
 */
