import { Pipe, PipeTransform } from "@angular/core";

import * as moment from "moment";
import "moment/locale/es";

@Pipe({
    name: "DateFormatSince"
})

export class PublicationDatePipe implements PipeTransform {

    transform(date: number) {
        return moment(date).fromNow();
    }
}
