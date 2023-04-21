class PostMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.post_mailer.post_created.subject
  #
  def post_created(event, organizerEmail, organizerName)
    @event = event
    @organizerEmail = organizerEmail
    @organizerName = organizerName    
    mail(to: @organizerEmail, subject: "Your Event, #{@event} Has Been Added Successfully")
  end
end
