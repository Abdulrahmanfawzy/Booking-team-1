import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"

export function DateGroup() {
    return (
        <FieldSet>
        <FieldLegend variant="label">
            Available Date
        </FieldLegend>
        <FieldGroup className="gap-3">
            <Field orientation="horizontal">
            <Checkbox
                id="finder-pref-9k2-hard-disks-ljj-checkbox"
                name="finder-pref-9k2-hard-disks-ljj-checkbox"
                defaultChecked
            />
            <FieldLabel
                htmlFor="finder-pref-9k2-hard-disks-ljj-checkbox"
                className="font-normal"
            >
                Today
            </FieldLabel>
            </Field>
            <Field orientation="horizontal">
            <Checkbox
                id="finder-pref-9k2-external-disks-1yg-checkbox"
                name="finder-pref-9k2-external-disks-1yg-checkbox"
                defaultChecked
            />
            <FieldLabel
                htmlFor="finder-pref-9k2-external-disks-1yg-checkbox"
                className="font-normal"
            >
                Tomorrow
            </FieldLabel>
            </Field>
        </FieldGroup>
        </FieldSet>
    )
}
