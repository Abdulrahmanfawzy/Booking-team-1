import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"

export function TypesGroup() {
    return (
        <FieldSet>
        <FieldLegend variant="label">
            Consultation Type
        </FieldLegend>
        <FieldGroup className="gap-3">
            <Field orientation="horizontal">
            <Checkbox
                id="c1"
                name="finder-pref-9k2-hard-disks-ljj-checkbox"
                defaultChecked
            />
            <FieldLabel
                htmlFor="c1"
                className="font-normal"
            >
                In-clinic
            </FieldLabel>
            </Field>
            <Field orientation="horizontal">
            <Checkbox
                id="c2"
                name="finder-pref-9k2-external-disks-1yg-checkbox"
                defaultChecked
            />
            <FieldLabel
                htmlFor="c2"
                className="font-normal"
            >
                Home Visit
            </FieldLabel>
            </Field>
        </FieldGroup>
        </FieldSet>
    )
}
