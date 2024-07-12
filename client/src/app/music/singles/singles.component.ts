import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapArrowLeftSquareFill, bootstrapXCircleFill } from '@ng-icons/bootstrap-icons';
import { featherUploadCloud } from '@ng-icons/feather-icons';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SingleApiService } from '../../service/single-api.service';
import SingleModel from '../../model/singleModel';

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
  songFile1: File | null = null;
  songFile: File | null = null;

  constructor(private router: Router, private singleApiService: SingleApiService) {
    this.singlesForm = new FormGroup({
      track_name: new FormControl('', [Validators.required]),
      track_series: new FormControl(''),
      track_subtle: new FormControl(''),
      track_soundTrack: new FormControl(''),
      track_artist: new FormControl('', [Validators.required]),
      track_primaryArtist1: new FormControl('Primary Artist', [Validators.required]),
      track_spotify_uri: new FormControl(''),
      track_apple_uri: new FormControl(''),
      track_sound_cloud_url: new FormControl(''),
      track_contributor_name1: new FormControl('', [Validators.required]),
      track_contributor_role1: new FormControl('', [Validators.required]),
      track_genre: new FormControl('', [Validators.required]),
      track_alt_genre: new FormControl(''),
      track_sub_genre: new FormControl(''),
      track_alt_genre2: new FormControl(''),
      track_record_year: new FormControl('', [Validators.required]),
      track_org_date: new FormControl('', [Validators.required]),
      track_comm_date: new FormControl('', [Validators.required]),
      track_comm_time: new FormControl(''),
      track_pre_date: new FormControl(''),
      track_lang_1: new FormControl('', [Validators.required]),
      track_year_when: new FormControl('', [Validators.required]),
      track_copyright_year: new FormControl('', [Validators.required]),
      track_copyright_iconMusic: new FormControl('', [Validators.required]),
      track_copyright_3: new FormControl('', [Validators.required]),
      track_copyright_dist: new FormControl('', [Validators.required]),
      track_isrc: new FormControl('', [Validators.required]),
      song_file1: new FormControl('', [Validators.required]),
      track_upc: new FormControl('', [Validators.required]),
      track_catalogue: new FormControl('', [Validators.required]),
      song_file: new FormControl('', [Validators.required]),
    });
  }

  onFileChange(event: Event, controlName: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      if (controlName === 'song_file1') {
        this.songFile1 = input.files[0];
      } else if (controlName === 'song_file') {
        this.songFile = input.files[0];
      }
    }
  }

  onSubmit() {
    if (this.singlesForm.valid) {
      const formValues: SingleModel = this.singlesForm.value as SingleModel;
      const formData = new FormData();

      // Append form values to FormData
      Object.keys(formValues).forEach(key => {
        formData.append(key, (formValues as any)[key]);
      });

      // Append files to FormData
      if (this.songFile1) {
        formData.append('song_file1', this.songFile1);
      }
      if (this.songFile) {
        formData.append('song_file', this.songFile);
      }

      // Send FormData to the service
      this.singleApiService.singlesForm(formData)
        .subscribe({
          next: (data: any) => {
            console.log(data);
            alert("Singles form data sent successfully");
          },
          error: (err: any) =>{ 
            console.log(err)
            alert(err);
          }
        });
    } 
  }
}

//   onFileChange(event: Event, controlName: string) {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) {
//       this.singlesForm.get(controlName)?.setValue(input.files[0]);
//     }
//   }

//   onSubmit() {
//     if (this.singlesForm.valid) {
//       const formData: SingleModel = {
//         ...this.singlesForm.value,
//         song_file1: this.singlesForm.value.song_file1!,
//         song_file: this.singlesForm.value.song_file!,
//       };
      
//       console.log(formData);
//       this.singleApiService.singlesForm(formData)
//         .subscribe({
//           next: (data: any) => {
//             console.log(data);
//             alert("Singles form data sent successfully");
//           },
//           error: (err: any) => console.log(err)
//         });
//       }
//     //  else {
//     //   this.singlesForm.markAllAsTouched();
//     // }
//   }

// }


  // onSubmit() {
  //   if (this.singlesForm.valid) {
  //     console.log(this.singlesForm.value);
  //     this.singleApiService.singlesForm(this.singlesForm.value)
  //       .subscribe({
  //         next: (data: any) => {
  //           console.log(data);
  //           alert("Singles form data sent successfully");
  //         },
  //         error: (err: any) => console.log(err)
  //       });
  //   }
  //   //  else {
  //   //   this.singlesForm.markAllAsTouched();
  //   // }
  // }


