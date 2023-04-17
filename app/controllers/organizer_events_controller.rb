class OrganizerEventsController < ApplicationController
    #permissions here
    skip_before_action :authorized_user, :admin_user
    wrap_parameters format: []


    def show
        organizer_event= find_organizer_event
        render json: organizer_event
    end

    def create 
        organizer_event = OrganizerEvent.create!(customer_event_params)
        render json: organizer_event, status: :created
    end

    def update 
        organizer_event = Organizer.find(params[:id])
        organizer_event.update!(organizer_event_params)
        render json: organizer_event, status: :ok
    end

    def destroy
        organizer_event = find_organizer_event
        organizer_event.destroy
        head :no_content
    end

    private

    def organizer_event_params
        params.permit(:event)
    end

    def find_organizer_event
        OrganizerEvent.find(params[:id])
    end

    def render_not_found_response
        render json: { errors: "Organizer Event not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end    
end
