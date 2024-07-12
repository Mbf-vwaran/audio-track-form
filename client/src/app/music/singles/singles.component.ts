import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapArrowLeftSquareFill, bootstrapXCircleFill } from '@ng-icons/bootstrap-icons';
import { featherUploadCloud } from '@ng-icons/feather-icons';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SingleApiService } from '../../service/single-api.service';

@Component({
  selector: 'app-singles',
  standalone: true,
  imports: [NgIconComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './singles.component.html',
  styleUrls: ['./singles.component.css'],
  viewProviders: [provideIcons({ bootstrapArrowLeftSquareFill, bootstrapXCircleFill, featherUploadCloud })]
})
export class SinglesComponent {
  singlesForm: FormGroup;

  constructor(private router: Router, private singleApiService: SingleApiService) {
    this.singlesForm = new FormGroup({
      track_name: new FormControl(''),
      track_series: new FormControl(''),
      track_subtle: new FormControl(''),
      track_soundTrack: new FormControl(''),
      track_artist: new FormControl(''),
      track_primaryArtist1: new FormControl(''),
      track_spotify_uri: new FormControl(''),
      track_apple_uri: new FormControl(''),
      track_sound_cloud_url: new FormControl(''),
      track_contributor_name1: new FormControl(''),
      track_contributor_role1: new FormControl(''),
      track_genre: new FormControl(''),
      track_alt_genre: new FormControl(''),
      track_sub_genre: new FormControl(''),
      track_alt_genre2: new FormControl(''),
      track_record_year: new FormControl(''),
      track_org_date: new FormControl(''),
      track_comm_date: new FormControl(''),
      track_comm_time: new FormControl(''),
      track_pre_date: new FormControl(''),
      track_lang_1: new FormControl(''),
      track_year_when: new FormControl(''),
      track_copyright_year: new FormControl(''),
      track_copyright_iconMusic: new FormControl(''),
      track_copyright_3: new FormControl(''),
      track_copyright_dist: new FormControl(''),
      track_isrc: new FormControl(''),
      // song_file1: new FormControl(''),
      track_upc: new FormControl(''),
      track_catalogue: new FormControl(''),
      // song_file: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.singlesForm.valid) {
      console.log(this.singlesForm.value);
      this.singleApiService.singlesForm(this.singlesForm.value)
        .subscribe({
          next: (data: any) => {
            console.log(data);
            alert("Singles form data sent successfully");
          },
          error: (err: any) => console.log(err)
        });
    }
    //  else {
    //   this.singlesForm.markAllAsTouched();
    // }
  }
}

