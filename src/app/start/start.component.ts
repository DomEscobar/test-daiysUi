import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent {
  readonly allowedExtensions = ['.pdf', '.csv', '.md', '.doc', '.jpg', '.png'];
  public webUrl: string | undefined;
  public isDraggedOver = false;
  public isTraining = false;
  public isTypeSelection = false;
  public id!: string;
  public chatDisabled = true;
  public canChat = false;
  public text = []

  constructor(
    private readonly AppService: AppService,
    activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = activatedRoute.snapshot.paramsMap.get("id")

    this.canChat = this.id!=null

  }

  public summorize(){}

  public submitWebsite() {}

  private handleFiles(files: FileList) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      const extension = files[i].name
        .substring(files[i].name.lastIndexOf('.'))
        .toLowerCase();

      if (this.allowedExtensions.includes(extension)) {
        formData.append('files', files[i], files[i].name);
      }
    }
  }

 public openFileSelection() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  handleFileSelection(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const files = fileInput.files;
    if (files) {
      this.handleFiles(files);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggedOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggedOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggedOver = false;
    const files = event.dataTransfer?.files;
    if (files) {
      this.handleFiles(files);
    }
  }
}
