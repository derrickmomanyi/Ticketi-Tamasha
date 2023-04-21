class PostMailer < ApplicationMailer

  def post_created(draft, organizerEmail, organizerName)
    @draft = draft
    @organizerEmail = organizerEmail
    @organizerName = organizerName    
    mail(to: @organizerEmail, subject: "Your Event, #{@draft} Has Been Created Successfully")
  end
end
