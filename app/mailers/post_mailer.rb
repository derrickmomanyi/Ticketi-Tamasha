class PostMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.post_mailer.post_created.subject
  #
  def post_created(draft, organizerEmail, organizerName)
    @draft = draft
    @organizerEmail = organizerEmail
    @organizerName = organizerName    
    mail(to: @organizerEmail, subject: "Your Event, #{@draft} Has Been Added Successfully")
  end
end
