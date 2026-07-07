import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function GenderGroup() {
    return (

        <RadioGroup defaultValue="comfortable" className="w-fit">
            <h2>Gender</h2>
            <div className="flex gap-3">
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="default" id="g1" className="hidden"/>
                    <Label htmlFor="g1" className="py-2 px-3 border rounded-lg peer-data-[state=checked]:bg-main-blue peer-data-[state=checked]:text-white">Male</Label>
                </div>
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="comfortable" id="g2" className="hidden"/>
                    <Label htmlFor="g2" className="py-2 px-3 border rounded-lg peer-data-[state=checked]:bg-main-blue peer-data-[state=checked]:text-white">Female</Label>
                </div>
            </div>
        </RadioGroup>
    )
}
