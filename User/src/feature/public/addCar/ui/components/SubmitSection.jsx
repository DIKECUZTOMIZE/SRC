import React from "react";
import { Sparkles } from "lucide-react";

import submitSectionToken from "../../../../../shared/styles/submitSectionToken";

import Button from "../../../../../shared/components/ui/Button";

import {
  FormActions,
  SubmitButton,
} from "../../../../../shared/components/ui/Form";


const SubmitSection = React.memo(({ isSubmitting, onCancel }) => {

  return (

    <div className={submitSectionToken.container}>


      <div className={submitSectionToken.actions}>


        {/* Helper Note */}

        <div className={submitSectionToken.hintText}>

          <Sparkles
            className={submitSectionToken.hintIcon}
          />

          <span>
            Ensure all submitted details match official RC & insurance records.
          </span>

        </div>



        {/* Actions */}

        <FormActions
          className={submitSectionToken.buttonGroup}
        >


          {onCancel && (

            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isSubmitting}
              className={submitSectionToken.cancelBtn}
            >
              Cancel
            </Button>

          )}



          <SubmitButton

            type="submit"

            loading={isSubmitting}

            className={submitSectionToken.submitBtn}

          >
            Submit Vehicle

          </SubmitButton>



        </FormActions>


      </div>


    </div>

  );

});


SubmitSection.displayName = "SubmitSection";


export default SubmitSection;