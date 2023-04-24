# frozen_string_literal: true
module Mail
  register_autoload :UnstructuredField, 'mail/fields/unstructured_field'
  register_autoload :StructuredField, 'mail/fields/structured_field'
  register_autoload :OptionalField, 'mail/fields/optional_field'

  register_autoload :BccField, 'mail/fields/bcc_field'
  register_autoload :CcField, 'mail/fields/cc_field'
  register_autoload :CommentsField, 'mail/fields/comments_field'
  register_autoload :ContentDescriptionField, 'mail/fields/content_description_field'
  register_autoload :ContentDispositionField, 'mail/fields/content_disposition_field'
  register_autoload :ContentIdField, 'mail/fields/content_id_field'
  register_autoload :ContentLocationField, 'mail/fields/content_location_field'
  register_autoload :ContentTransferEncodingField, 'mail/fields/content_transfer_encoding_field'
  register_autoload :ContentTypeField, 'mail/fields/content_type_field'
  register_autoload :DateField, 'mail/fields/date_field'
  register_autoload :FromField, 'mail/fields/from_field'
  register_autoload :InReplyToField, 'mail/fields/in_reply_to_field'
  register_autoload :KeywordsField, 'mail/fields/keywords_field'
  register_autoload :MessageIdField, 'mail/fields/message_id_field'
  register_autoload :MimeVersionField, 'mail/fields/mime_version_field'
  register_autoload :ReceivedField, 'mail/fields/received_field'
  register_autoload :ReferencesField, 'mail/fields/references_field'
  register_autoload :ReplyToField, 'mail/fields/reply_to_field'
  register_autoload :ResentBccField, 'mail/fields/resent_bcc_field'
  register_autoload :ResentCcField, 'mail/fields/resent_cc_field'
  register_autoload :ResentDateField, 'mail/fields/resent_date_field'
  register_autoload :ResentFromField, 'mail/fields/resent_from_field'
  register_autoload :ResentMessageIdField, 'mail/fields/resent_message_id_field'
  register_autoload :ResentSenderField, 'mail/fields/resent_sender_field'
  register_autoload :ResentToField, 'mail/fields/resent_to_field'
  register_autoload :ReturnPathField, 'mail/fields/return_path_field'
  register_autoload :SenderField, 'mail/fields/sender_field'
  register_autoload :SubjectField, 'mail/fields/subject_field'
  register_autoload :ToField, 'mail/fields/to_field'
end
