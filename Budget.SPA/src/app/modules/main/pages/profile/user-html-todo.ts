
    <!-- View mode -->
    <ng-container *ngIf="!editMode">

        <!-- Header -->
        <div class="relative w-full h-40 sm:h-48 px-8 sm:px-12 bg-accent-100 dark:bg-accent-700">
            <!-- Background -->
            <ng-container *ngIf="contact.background">
                <img
                    class="absolute inset-0 object-cover w-full h-full"
                    [src]="contact.background">
            </ng-container>
            <!-- Close button -->
            <div class="flex items-center justify-end w-full max-w-3xl mx-auto pt-6">
                <button
                    mat-icon-button
                    [matTooltip]="'Close'"
                    [routerLink]="['../']">
                    <mat-icon
                        class="text-white"
                        [svgIcon]="'heroicons_outline:x'"></mat-icon>
                </button>
            </div>
        </div>

        <!-- Contact -->
        <div class="relative flex flex-col flex-auto items-center p-6 pt-0 sm:p-12 sm:pt-0">
            <div class="w-full max-w-3xl">

                <!-- Avatar and actions -->
                <div class="flex flex-auto items-end -mt-16">
                    <!-- Avatar -->
                    <div class="flex items-center justify-center w-32 h-32 rounded-full overflow-hidden ring-4 ring-bg-card">
                        <img
                            class="object-cover w-full h-full"
                            *ngIf="contact.avatar"
                            [src]="contact.avatar">
                        <div
                            class="flex items-center justify-center w-full h-full rounded overflow-hidden uppercase text-8xl font-bold leading-none bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-200"
                            *ngIf="!contact.avatar">
                            {{contact.name.charAt(0)}}
                        </div>
                    </div>
                    <!-- Actions -->
                    <div class="flex items-center ml-auto mb-1">
                        <button
                            mat-stroked-button
                            (click)="toggleEditMode(true)">
                            <mat-icon
                                class="icon-size-5"
                                [svgIcon]="'heroicons_solid:pencil-alt'"></mat-icon>
                            <span class="ml-2">Edit</span>
                        </button>
                    </div>
                </div>

                <!-- Name -->
                <div class="mt-3 text-4xl font-bold truncate">{{contact.name}}</div>

                <!-- Tags -->
                <ng-container *ngIf="contact.tags.length">
                    <div class="flex flex-wrap items-center mt-2">
                        <!-- Tag -->
                        <ng-container *ngFor="let tag of (contact.tags | fuseFindByKey:'id':tags); trackBy: trackByFn">
                            <div class="flex items-center justify-center py-1 px-3 mr-3 mb-3 rounded-full leading-normal text-gray-500 bg-gray-100 dark:text-gray-300 dark:bg-gray-700">
                                <span class="text-sm font-medium whitespace-nowrap">{{tag.title}}</span>
                            </div>
                        </ng-container>
                    </div>
                </ng-container>

                <div class="flex flex-col mt-4 pt-6 border-t space-y-8">
                    <!-- Title -->
                    <ng-container *ngIf="contact.title">
                        <div class="flex sm:items-center">
                            <mat-icon [svgIcon]="'heroicons_outline:briefcase'"></mat-icon>
                            <div class="ml-6 leading-6">{{contact.title}}</div>
                        </div>
                    </ng-container>

                    <!-- Company -->
                    <ng-container *ngIf="contact.company">
                        <div class="flex sm:items-center">
                            <mat-icon [svgIcon]="'heroicons_outline:office-building'"></mat-icon>
                            <div class="ml-6 leading-6">{{contact.company}}</div>
                        </div>
                    </ng-container>

                    <!-- Emails -->
                    <ng-container *ngIf="contact.emails.length">
                        <div class="flex">
                            <mat-icon [svgIcon]="'heroicons_outline:mail'"></mat-icon>
                            <div class="min-w-0 ml-6 space-y-1">
                                <ng-container *ngFor="let email of contact.emails; trackBy: trackByFn">
                                    <div class="flex items-center leading-6">
                                        <a
                                            class="hover:underline text-primary-500"
                                            [href]="'mailto:' + email.email"
                                            target="_blank">
                                            {{email.email}}
                                        </a>
                                        <div
                                            class="text-md truncate text-secondary"
                                            *ngIf="email.label">
                                            <span class="mx-2">&bull;</span>
                                            <span class="font-medium">{{email.label}}</span>
                                        </div>
                                    </div>
                                </ng-container>
                            </div>
                        </div>
                    </ng-container>

                    <!-- Phone -->
                    <ng-container *ngIf="contact.phoneNumbers.length">
                        <div class="flex">
                            <mat-icon [svgIcon]="'heroicons_outline:phone'"></mat-icon>
                            <div class="min-w-0 ml-6 space-y-1">
                                <ng-container *ngFor="let phoneNumber of contact.phoneNumbers; trackBy: trackByFn">
                                    <div class="flex items-center leading-6">
                                        <div
                                            class="hidden sm:flex w-6 h-4 overflow-hidden"
                                            [matTooltip]="getCountryByIso(phoneNumber.country).name"
                                            [style.background]="'url(\'/assets/images/apps/contacts/flags.png\') no-repeat 0 0'"
                                            [style.backgroundSize]="'24px 3876px'"
                                            [style.backgroundPosition]="getCountryByIso(phoneNumber.country).flagImagePos"></div>
                                        <div class="sm:ml-3 font-mono">{{getCountryByIso(phoneNumber.country).code}}</div>
                                        <div class="ml-2.5 font-mono">{{phoneNumber.phoneNumber}}</div>
                                        <div
                                            class="text-md truncate text-secondary"
                                            *ngIf="phoneNumber.label">
                                            <span class="mx-2">&bull;</span>
                                            <span class="font-medium">{{phoneNumber.label}}</span>
                                        </div>
                                    </div>
                                </ng-container>
                            </div>
                        </div>
                    </ng-container>

                    <!-- Address -->
                    <ng-container *ngIf="contact.address">
                        <div class="flex sm:items-center">
                            <mat-icon [svgIcon]="'heroicons_outline:location-marker'"></mat-icon>
                            <div class="ml-6 leading-6">{{contact.address}}</div>
                        </div>
                    </ng-container>

                    <!-- Birthday -->
                    <ng-container *ngIf="contact.birthday">
                        <div class="flex sm:items-center">
                            <mat-icon [svgIcon]="'heroicons_outline:cake'"></mat-icon>
                            <div class="ml-6 leading-6">{{contact.birthday | date:'longDate'}}</div>
                        </div>
                    </ng-container>

                    <!-- Notes -->
                    <ng-container *ngIf="contact.notes">
                        <div class="flex">
                            <mat-icon [svgIcon]="'heroicons_outline:menu-alt-2'"></mat-icon>
                            <div
                                class="max-w-none ml-6 prose prose-sm"
                                [innerHTML]="contact.notes"></div>
                        </div>
                    </ng-container>
                </div>

            </div>
        </div>
    </ng-container>

    <!-- Edit mode -->
    <ng-container *ngIf="editMode">

        <!-- Header -->
        <div class="relative w-full h-40 sm:h-48 px-8 sm:px-12 bg-accent-100 dark:bg-accent-700">
            <!-- Background -->
            <ng-container *ngIf="contact.background">
                <img
                    class="absolute inset-0 object-cover w-full h-full"
                    [src]="contact.background">
            </ng-container>
            <!-- Close button -->
            <div class="flex items-center justify-end w-full max-w-3xl mx-auto pt-6">
                <button
                    mat-icon-button
                    [matTooltip]="'Close'"
                    [routerLink]="['../']">
                    <mat-icon
                        class="text-white"
                        [svgIcon]="'heroicons_outline:x'"></mat-icon>
                </button>
            </div>
        </div>

        <!-- Contact form -->
        <div class="relative flex flex-col flex-auto items-center px-6 sm:px-12">
            <div class="w-full max-w-3xl">
                <form [formGroup]="contactForm">

                    <!-- Avatar -->
                    <div class="flex flex-auto items-end -mt-16">
                        <div class="relative flex items-center justify-center w-32 h-32 rounded-full overflow-hidden ring-4 ring-bg-card">
                            <!-- Upload / Remove avatar -->
                            <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
                            <div class="absolute inset-0 flex items-center justify-center z-20">
                                <div>
                                    <input
                                        id="avatar-file-input"
                                        class="absolute h-0 w-0 opacity-0 invisible pointer-events-none"
                                        type="file"
                                        [multiple]="false"
                                        [accept]="'image/jpeg, image/png'"
                                        (change)="uploadAvatar(avatarFileInput.files)"
                                        #avatarFileInput>
                                    <label
                                        class="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-hover"
                                        for="avatar-file-input"
                                        matRipple>
                                        <mat-icon
                                            class="text-white"
                                            [svgIcon]="'heroicons_outline:camera'"></mat-icon>
                                    </label>
                                </div>
                                <div>
                                    <button
                                        mat-icon-button
                                        (click)="removeAvatar()">
                                        <mat-icon
                                            class="text-white"
                                            [svgIcon]="'heroicons_outline:trash'"></mat-icon>
                                    </button>
                                </div>
                            </div>
                            <!-- Image/Letter -->
                            <img
                                class="object-cover w-full h-full"
                                *ngIf="contact.avatar"
                                [src]="contact.avatar">
                            <div
                                class="flex items-center justify-center w-full h-full rounded overflow-hidden uppercase text-8xl font-bold leading-none bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                *ngIf="!contact.avatar">
                                {{contact.name.charAt(0)}}
                            </div>
                        </div>
                    </div>

                    <!-- Name -->
                    <div class="mt-8">
                        <mat-form-field class="fuse-mat-no-subscript w-full">
                            <mat-label>Name</mat-label>
                            <mat-icon
                                matPrefix
                                class="hidden sm:flex icon-size-5"
                                [svgIcon]="'heroicons_solid:user-circle'"></mat-icon>
                            <input
                                matInput
                                [formControlName]="'name'"
                                [placeholder]="'Name'"
                                [spellcheck]="false">
                        </mat-form-field>
                    </div>

                    <!-- Tags -->
                    <div class="flex flex-wrap items-center -m-1.5 mt-6">
                        <!-- Tags -->
                        <ng-container *ngIf="contact.tags.length">
                            <ng-container *ngFor="let tag of (contact.tags | fuseFindByKey:'id':tags); trackBy: trackByFn">
                                <div class="flex items-center justify-center px-4 m-1.5 rounded-full leading-9 text-gray-500 bg-gray-100 dark:text-gray-300 dark:bg-gray-700">
                                    <span class="text-md font-medium whitespace-nowrap">{{tag.title}}</span>
                                </div>
                            </ng-container>
                        </ng-container>
                        <!-- Tags panel and its button -->
                        <div
                            class="flex items-center justify-center px-4 m-1.5 rounded-full leading-9 cursor-pointer text-gray-500 bg-gray-100 dark:text-gray-300 dark:bg-gray-700"
                            (click)="openTagsPanel()"
                            #tagsPanelOrigin>

                            <ng-container *ngIf="contact.tags.length">
                                <mat-icon
                                    class="icon-size-5"
                                    [svgIcon]="'heroicons_solid:pencil-alt'"></mat-icon>
                                <span class="ml-1.5 text-md font-medium whitespace-nowrap">Edit</span>
                            </ng-container>

                            <ng-container *ngIf="!contact.tags.length">
                                <mat-icon
                                    class="icon-size-5"
                                    [svgIcon]="'heroicons_solid:plus-circle'"></mat-icon>
                                <span class="ml-1.5 text-md font-medium whitespace-nowrap">Add</span>
                            </ng-container>

                            <!-- Tags panel -->
                            <ng-template #tagsPanel>
                                <div class="w-60 rounded border shadow-md bg-card">
                                    <!-- Tags panel header -->
                                    <div class="flex items-center m-3 mr-2">
                                        <div class="flex items-center">
                                            <mat-icon
                                                class="icon-size-5"
                                                [svgIcon]="'heroicons_solid:search'"></mat-icon>
                                            <div class="ml-2">
                                                <input
                                                    class="w-full min-w-0 py-1 border-0"
                                                    type="text"
                                                    placeholder="Enter tag name"
                                                    (input)="filterTags($event)"
                                                    (keydown)="filterTagsInputKeyDown($event)"
                                                    [maxLength]="30"
                                                    #newTagInput>
                                            </div>
                                        </div>
                                        <button
                                            class="ml-1"
                                            mat-icon-button
                                            (click)="toggleTagsEditMode()">
                                            <mat-icon
                                                *ngIf="!tagsEditMode"
                                                class="icon-size-5"
                                                [svgIcon]="'heroicons_solid:pencil-alt'"></mat-icon>
                                            <mat-icon
                                                *ngIf="tagsEditMode"
                                                class="icon-size-5"
                                                [svgIcon]="'heroicons_solid:check'"></mat-icon>
                                        </button>
                                    </div>
                                    <div
                                        class="flex flex-col max-h-64 py-2 border-t overflow-y-auto">
                                        <!-- Tags -->
                                        <ng-container *ngIf="!tagsEditMode">
                                            <ng-container *ngFor="let tag of filteredTags; trackBy: trackByFn">
                                                <div
                                                    class="flex items-center h-10 min-h-10 px-4 cursor-pointer hover:bg-hover"
                                                    (click)="toggleContactTag(tag)"
                                                    matRipple>
                                                    <mat-checkbox
                                                        class="flex items-center h-10 min-h-10 pointer-events-none"
                                                        [checked]="contact.tags.includes(tag.id)"
                                                        [color]="'primary'"
                                                        [disableRipple]="true">
                                                    </mat-checkbox>
                                                    <div class="ml-1">{{tag.title}}</div>
                                                </div>
                                            </ng-container>
                                        </ng-container>
                                        <!-- Tags editing -->
                                        <ng-container *ngIf="tagsEditMode">
                                            <div class="py-2 space-y-2">
                                                <ng-container *ngFor="let tag of filteredTags; trackBy: trackByFn">
                                                    <div class="flex items-center">
                                                        <mat-form-field class="fuse-mat-dense fuse-mat-no-subscript w-full mx-4">
                                                            <input
                                                                matInput
                                                                [value]="tag.title"
                                                                (input)="updateTagTitle(tag, $event)">
                                                            <button
                                                                mat-icon-button
                                                                (click)="deleteTag(tag)"
                                                                matSuffix>
                                                                <mat-icon
                                                                    class="icon-size-5 ml-2"
                                                                    [svgIcon]="'heroicons_solid:trash'"></mat-icon>
                                                            </button>
                                                        </mat-form-field>
                                                    </div>
                                                </ng-container>
                                            </div>
                                        </ng-container>
                                        <!-- Create tag -->
                                        <div
                                            class="flex items-center h-10 min-h-10 -ml-0.5 pl-4 pr-3 leading-none cursor-pointer hover:bg-hover"
                                            *ngIf="shouldShowCreateTagButton(newTagInput.value)"
                                            (click)="createTag(newTagInput.value); newTagInput.value = ''"
                                            matRipple>
                                            <mat-icon
                                                class="mr-2 icon-size-5"
                                                [svgIcon]="'heroicons_solid:plus-circle'"></mat-icon>
                                            <div class="break-all">Create "<b>{{newTagInput.value}}</b>"</div>
                                        </div>
                                    </div>
                                </div>
                            </ng-template>
                        </div>
                    </div>

                    <!-- Title -->
                    <div class="mt-8">
                        <mat-form-field class="fuse-mat-no-subscript w-full">
                            <mat-label>Title</mat-label>
                            <mat-icon
                                matPrefix
                                class="hidden sm:flex icon-size-5"
                                [svgIcon]="'heroicons_solid:briefcase'"></mat-icon>
                            <input
                                matInput
                                [formControlName]="'title'"
                                [placeholder]="'Job title'">
                        </mat-form-field>
                    </div>

                    <!-- Company -->
                    <div class="mt-8">
                        <mat-form-field class="fuse-mat-no-subscript w-full">
                            <mat-label>Company</mat-label>
                            <mat-icon
                                matPrefix
                                class="hidden sm:flex icon-size-5"
                                [svgIcon]="'heroicons_solid:office-building'"></mat-icon>
                            <input
                                matInput
                                [formControlName]="'company'"
                                [placeholder]="'Company'">
                        </mat-form-field>
                    </div>

                    <!-- Emails -->
                    <div class="mt-8">
                        <div class="space-y-4">
                            <ng-container *ngFor="let email of contactForm.get('emails')['controls']; let i = index; let first = first; let last = last; trackBy: trackByFn">
                                <div class="flex">
                                    <mat-form-field class="fuse-mat-no-subscript flex-auto">
                                        <mat-label *ngIf="first">Email</mat-label>
                                        <mat-icon
                                            matPrefix
                                            class="hidden sm:flex icon-size-5"
                                            [svgIcon]="'heroicons_solid:mail'"></mat-icon>
                                        <input
                                            matInput
                                            [formControl]="email.get('email')"
                                            [placeholder]="'Email address'"
                                            [spellcheck]="false">
                                    </mat-form-field>
                                    <mat-form-field class="fuse-mat-no-subscript flex-auto w-full max-w-24 sm:max-w-40 ml-2 sm:ml-4">
                                        <mat-label *ngIf="first">Label</mat-label>
                                        <mat-icon
                                            matPrefix
                                            class="hidden sm:flex icon-size-5"
                                            [svgIcon]="'heroicons_solid:tag'"></mat-icon>
                                        <input
                                            matInput
                                            [formControl]="email.get('label')"
                                            [placeholder]="'Label'">
                                    </mat-form-field>
                                    <!-- Remove email -->
                                    <ng-container *ngIf="!(first && last)">
                                        <div
                                            class="flex items-center w-10 pl-2"
                                            [ngClass]="{'mt-6': first}">
                                            <button
                                                class="w-8 h-8 min-h-8"
                                                mat-icon-button
                                                (click)="removeEmailField(i)"
                                                matTooltip="Remove">
                                                <mat-icon
                                                    class="icon-size-5"
                                                    [svgIcon]="'heroicons_solid:trash'"></mat-icon>
                                            </button>
                                        </div>
                                    </ng-container>
                                </div>
                            </ng-container>
                        </div>
                        <div
                            class="group inline-flex items-center mt-2 -ml-4 py-2 px-4 rounded cursor-pointer"
                            (click)="addEmailField()">
                            <mat-icon
                                class="icon-size-5"
                                [svgIcon]="'heroicons_solid:plus-circle'"></mat-icon>
                            <span class="ml-2 font-medium text-secondary group-hover:underline">Add an email address</span>
                        </div>
                    </div>

                    <!-- Phone numbers -->
                    <div class="mt-8">
                        <div class="space-y-4">
                            <ng-container *ngFor="let phoneNumber of contactForm.get('phoneNumbers')['controls']; let i = index; let first = first; let last = last; trackBy: trackByFn">
                                <div class="relative flex">
                                    <mat-form-field class="fuse-mat-no-subscript flex-auto">
                                        <mat-label *ngIf="first">Phone</mat-label>
                                        <input
                                            matInput
                                            [formControl]="phoneNumber.get('phoneNumber')"
                                            [placeholder]="'Phone'">
                                        <mat-select
                                            class="mr-1.5"
                                            [formControl]="phoneNumber.get('country')"
                                            matPrefix>
                                            <mat-select-trigger>
                                                <span class="flex items-center">
                                                    <span
                                                        class="hidden sm:flex w-6 h-4 mr-1 overflow-hidden"
                                                        [style.background]="'url(\'/assets/images/apps/contacts/flags.png\') no-repeat 0 0'"
                                                        [style.backgroundSize]="'24px 3876px'"
                                                        [style.backgroundPosition]="getCountryByIso(phoneNumber.get('country').value).flagImagePos"></span>
                                                    <span class="sm:mx-0.5 font-medium text-default">{{getCountryByIso(phoneNumber.get('country').value).code}}</span>
                                                </span>
                                            </mat-select-trigger>
                                            <ng-container *ngFor="let country of countries; trackBy: trackByFn">
                                                <mat-option [value]="country.iso">
                                                    <span class="flex items-center">
                                                        <span
                                                            class="w-6 h-4 overflow-hidden"
                                                            [style.background]="'url(\'/assets/images/apps/contacts/flags.png\') no-repeat 0 0'"
                                                            [style.backgroundSize]="'24px 3876px'"
                                                            [style.backgroundPosition]="country.flagImagePos"></span>
                                                        <span class="ml-2">{{country.name}}</span>
                                                        <span class="ml-2 font-medium">{{country.code}}</span>
                                                    </span>
                                                </mat-option>
                                            </ng-container>
                                        </mat-select>
                                    </mat-form-field>
                                    <mat-form-field class="fuse-mat-no-subscript flex-auto w-full max-w-24 sm:max-w-40 ml-2 sm:ml-4">
                                        <mat-label *ngIf="first">Label</mat-label>
                                        <mat-icon
                                            matPrefix
                                            class="hidden sm:flex icon-size-5"
                                            [svgIcon]="'heroicons_solid:tag'"></mat-icon>
                                        <input
                                            matInput
                                            [formControl]="phoneNumber.get('label')"
                                            [placeholder]="'Label'">
                                    </mat-form-field>
                                    <!-- Remove phone number -->
                                    <ng-container *ngIf="!(first && last)">
                                        <div
                                            class="flex items-center w-10 pl-2"
                                            [ngClass]="{'mt-6': first}">
                                            <button
                                                class="w-8 h-8 min-h-8"
                                                mat-icon-button
                                                (click)="removePhoneNumberField(i)"
                                                matTooltip="Remove">
                                                <mat-icon
                                                    class="icon-size-5"
                                                    [svgIcon]="'heroicons_solid:trash'"></mat-icon>
                                            </button>
                                        </div>
                                    </ng-container>
                                </div>
                            </ng-container>
                        </div>
                        <div
                            class="group inline-flex items-center mt-2 -ml-4 py-2 px-4 rounded cursor-pointer"
                            (click)="addPhoneNumberField()">
                            <mat-icon
                                class="icon-size-5"
                                [svgIcon]="'heroicons_solid:plus-circle'"></mat-icon>
                            <span class="ml-2 font-medium text-secondary group-hover:underline">Add a phone number</span>
                        </div>
                    </div>

                    <!-- Address -->
                    <div class="mt-8">
                        <mat-form-field class="fuse-mat-no-subscript w-full">
                            <mat-label>Address</mat-label>
                            <mat-icon
                                matPrefix
                                class="hidden sm:flex icon-size-5"
                                [svgIcon]="'heroicons_solid:location-marker'"></mat-icon>
                            <input
                                matInput
                                [formControlName]="'address'"
                                [placeholder]="'Address'">
                        </mat-form-field>
                    </div>

                    <!-- Birthday -->
                    <div class="mt-8">
                        <mat-form-field class="fuse-mat-no-subscript w-full">
                            <mat-label>Birthday</mat-label>
                            <mat-icon
                                matPrefix
                                class="hidden sm:flex icon-size-5"
                                [svgIcon]="'heroicons_solid:cake'"></mat-icon>
                            <input
                                matInput
                                [matDatepicker]="birthdayDatepicker"
                                [formControlName]="'birthday'"
                                [placeholder]="'Birthday'">
                            <mat-datepicker-toggle
                                matSuffix
                                [for]="birthdayDatepicker">
                            </mat-datepicker-toggle>
                            <mat-datepicker #birthdayDatepicker></mat-datepicker>
                        </mat-form-field>
                    </div>

                    <!-- Notes -->
                    <div class="mt-8">
                        <mat-form-field class="fuse-mat-textarea fuse-mat-no-subscript w-full">
                            <mat-label>Notes</mat-label>
                            <mat-icon
                                matPrefix
                                class="hidden sm:flex icon-size-5"
                                [svgIcon]="'heroicons_solid:menu-alt-2'"></mat-icon>
                            <textarea
                                matInput
                                [formControlName]="'notes'"
                                [placeholder]="'Notes'"
                                [rows]="5"
                                [spellcheck]="false"
                                matTextareaAutosize></textarea>
                        </mat-form-field>
                    </div>

                    <!-- Actions -->
                    <div class="flex items-center mt-10 -mx-6 sm:-mx-12 py-4 pr-4 pl-1 sm:pr-12 sm:pl-7 border-t bg-gray-50 dark:bg-transparent">
                        <!-- Delete -->
                        <button
                            mat-button
                            [color]="'warn'"
                            [matTooltip]="'Delete'"
                            (click)="deleteContact()">
                            Delete
                        </button>
                        <!-- Cancel -->
                        <button
                            class="ml-auto"
                            mat-button
                            [matTooltip]="'Cancel'"
                            (click)="toggleEditMode(false)">
                            Cancel
                        </button>
                        <!-- Save -->
                        <button
                            class="ml-2"
                            mat-flat-button
                            [color]="'primary'"
                            [disabled]="contactForm.invalid"
                            [matTooltip]="'Save'"
                            (click)="updateContact()">
                            Save
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </ng-container>
