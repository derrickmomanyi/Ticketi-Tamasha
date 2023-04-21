class DraftsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response   
    skip_before_action :authorized_user, :admin_user, only: [:index, :show, :create, :update, :destroy] #allows non admins to access index and show
    # skip_before_action :authorized_user, :admin_user #allows non admins to access index and show
    wrap_parameters format: []

    def index        
        render json: Draft.all, status: :ok        
    end

    def show
        draft = find_draft
        render json: draft
    end

    def create
        draft = Draft.create!(draft_params)        
        render json: draft, status: :created
    end

   
    def update
        draft = find_draft
        draft.update!(draft_params)
        render json: draft, status: :ok
    end

    def destroy
        draft = find_draft
        draft.destroy
        head :no_content
    end

    private

    def find_draft
        Draft.find(params[:id])
    end

    def draft_params
        params.permit(:title, :image, :category, :description, :hosted_by, :featuring, :dress_code, :location, :date, :time ,:tickets, :price, :organizer_id)
    end

    def render_not_found_response
        render json: { errors: "Draft not found"}, status: :not_found
    end
    

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
