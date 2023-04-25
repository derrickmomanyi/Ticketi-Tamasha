# Preview all emails at http://localhost:3000/rails/mailers/purchase_mailer
class PurchaseMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/purchase_mailer/confirmation_message
  def confirmation_message
    PurchaseMailer.confirmation_message
  end

end
