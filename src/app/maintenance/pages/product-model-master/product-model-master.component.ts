import { Component, PipeTransform } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PRODUCTMODELTABLEDATA } from '../../data/product-model-master-table-data';
import { ProductModelMasterTableInterface } from '../../model/product-model-master-table-interface';

function search(text: string, pipe: PipeTransform): ProductModelMasterTableInterface[] {
	return PRODUCTMODELTABLEDATA.filter((product_model) => {
		const term = text.toLowerCase();
		return (
			product_model.name.toLowerCase().includes(term) ||
			product_model.id.toLowerCase().includes(term) ||
			pipe.transform(product_model.kpi_value).includes(term) ||
			product_model.part1.toLowerCase().includes(term) ||
			product_model.part2.toLowerCase().includes(term) ||
			product_model.part3.toLowerCase().includes(term) ||
			product_model.part4.toLowerCase().includes(term) ||
			product_model.part5.toLowerCase().includes(term)
		);
	});
}

@Component({
	selector: 'app-product-model-master',
	templateUrl: './product-model-master.component.html',
	styleUrls: ['./product-model-master.component.scss']
})

export class ProductModelMasterComponent {
	productModelMasterTable$: Observable<ProductModelMasterTableInterface[]>;
	filter = new FormControl('', { nonNullable: true });

	constructor(
		pipe: DecimalPipe,
		private modalService: NgbModal
		) {
		this.productModelMasterTable$ = this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text, pipe)),
		);
	}

	openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}
}
